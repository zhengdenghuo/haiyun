import Image from "next/image";

type LineAddFriendButtonProps = {
  href?: string;
  className?: string;
};

export function LineAddFriendButton({ href, className = "" }: LineAddFriendButtonProps) {
  const hasHref = Boolean(href?.trim());

  return (
    <a
      href={hasHref ? href : "#"}
      aria-disabled={!hasHref}
      className={`inline-flex items-center ${!hasHref ? "cursor-not-allowed opacity-70" : ""} ${className}`.trim()}
      {...(hasHref && href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Image
        src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png"
        alt="Add friend on LINE"
        width={116}
        height={36}
        className="h-9 w-auto"
        unoptimized
      />
    </a>
  );
}
