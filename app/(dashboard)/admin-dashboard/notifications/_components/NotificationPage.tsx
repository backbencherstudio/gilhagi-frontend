"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, Clock, Loader2 } from "lucide-react";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import TableTitle from "@/components/dashoboard/TableTitle";
import { 
  useGetNotificationsQuery, 
  useUpdateNotificationStatusMutation 
} from "@/redux/features/notification/notificationApi";

export default function NotificationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [updatingId, setUpdatingId] = useState<number | null>(null);   // ← added

  const { data: notificationsData, isLoading } = useGetNotificationsQuery(undefined);
  const [updateStatus, { isLoading: isUpdating }] = useUpdateNotificationStatusMutation();

  const handleMarkAsRead = async (id: number) => {
    if (updatingId === id) return; // optional: prevent double click

    setUpdatingId(id);           // ← set which row is updating
    try {
      await updateStatus(id.toString()).unwrap();
      console.log(`Notification ${id} marked as read`);
    } catch (error) {
      console.error("Failed to update notification:", error);
    } finally {
      setUpdatingId(null);       // ← always clear when done
    }
  };

  if (isLoading) return <div className="p-10 text-center">Laden...</div>;

  const notifications = notificationsData?.notifications || [];
  const filteredNotifications = notifications.filter((n: any) =>
    n.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <HeadingTitle title="Benachrichtigungen" subtitle="Verwalten Sie Ihre Nachrichten" />

      <section className="mt-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <TableTitle title="Alle Nachrichten" subtitle="Klicken Sie auf 'Gelesen', um den Status zu aktualisieren" />
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Suchen..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredNotifications.map((notification: any) => (
            <div 
              key={notification.id} 
              className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex gap-4 items-start">
                <div 
                  className={`mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 ${
                    notification.status === 'read' 
                      ? 'bg-slate-300' 
                      : 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                  }`} 
                />
                
                <div>
                  <h4 className="font-semibold text-slate-900">{notification.name}</h4>
                  <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12}/> {new Date(notification.created_at).toLocaleDateString()}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded uppercase font-bold text-[10px]">
                      {notification.status}
                    </span>
                  </div>
                </div>
              </div>

              {notification.status !== "read" && (
                <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  disabled={isUpdating && updatingId === notification.id}
                  className="flex items-center gap-2 px-4 py-2 bg-[#085EC4]/90 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {updatingId === notification.id ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      <span>Wird verarbeitet...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={16} />
                      Gelesen
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}