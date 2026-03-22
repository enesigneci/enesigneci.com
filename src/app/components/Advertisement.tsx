import { ExternalLink } from 'lucide-react';

interface AdvertisementProps {
  size?: 'banner' | 'sidebar' | 'large';
  className?: string;
}

export function Advertisement({ size = 'banner', className = '' }: AdvertisementProps) {
  // Return null if there's no actual advertisement content to show.
  // This ensures that placeholder spaces don't clutter the UI.
  return null;
}
