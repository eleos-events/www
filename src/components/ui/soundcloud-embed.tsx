"use client";

export type SoundCloudEmbedProps = {
  url: string;
};

export function SoundCloudEmbed({ url }: SoundCloudEmbedProps) {
  return (
    <iframe
      src={url}
      width="100%"
      height="120"
      allow="autoplay"
      style={{ border: 0 }}
    />
  );
}
