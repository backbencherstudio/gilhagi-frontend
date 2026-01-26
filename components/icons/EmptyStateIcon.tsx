const EmptyStateIcon = ({ className }: { className?: string }) => {
    return (<><svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M60 110H180M75 125H195M90 140H160" stroke="#E6EEFF" stroke-width="12" stroke-linecap="round" />

        <line x1="105" y1="85" x2="112" y2="75" stroke="#4A90E2" stroke-width="2" stroke-linecap="round" />
        <line x1="120" y1="82" x2="120" y2="70" stroke="#4A90E2" stroke-width="2" stroke-linecap="round" />
        <line x1="135" y1="85" x2="128" y2="75" stroke="#4A90E2" stroke-width="2" stroke-linecap="round" />

        <path d="M95 105L145 105L155 125H145C145 125 145 135 120 135C95 135 95 125 95 125H85L95 105Z" fill="#F0F7FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M85 125V145H155V125" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

        <path d="M110 125C110 125 110 132 120 132C130 132 130 125 130 125" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" />
    </svg></>)
}


export default EmptyStateIcon;