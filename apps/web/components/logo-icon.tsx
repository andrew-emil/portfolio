export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head outline */}
      <path
        d="M50 15C42 15 35 22 35 30V45C35 53 42 60 50 60C58 60 65 53 65 45V30C65 22 58 15 50 15Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* Neck and shoulders */}
      <path d="M35 55L30 75H70L65 55" stroke="currentColor" strokeWidth="2" fill="none" />

      {/* Circuit nodes in head */}
      <circle cx="45" cy="25" r="2" fill="rgb(168, 85, 247)" />
      <circle cx="55" cy="30" r="2" fill="rgb(168, 85, 247)" />
      <circle cx="50" cy="35" r="2" fill="rgb(168, 85, 247)" />
      <circle cx="42" cy="40" r="2" fill="rgb(168, 85, 247)" />
      <circle cx="58" cy="42" r="2" fill="rgb(168, 85, 247)" />

      {/* Circuit lines */}
      <path d="M45 25V20M55 30V25M50 35V30M42 40V35M58 42V37" stroke="rgb(168, 85, 247)" strokeWidth="1.5" />

      {/* Code brackets on chest */}
      <path d="M45 65L42 68L45 71M55 65L58 68L55 71" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M47 71L53 65" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
