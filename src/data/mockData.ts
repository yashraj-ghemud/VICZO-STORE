export interface App {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  package_name: string;
  version: string;
  developer_id: string;
  developer_name: string;
  icon_url: string;
  screenshots: string[];
  apk_url: string;
  min_android: string;
  size_bytes: number;
  category: string;
  tags: string[];
  downloads: number;
  rating_avg: number;
  rating_count: number;
  is_verified: boolean;
  is_featured: boolean;
  created_at: string;
}

export interface Website {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  developer_id: string;
  developer_name: string;
  thumbnail_url: string;
  screenshots: string[];
  category: string;
  tags: string[];
  tech_stack: string[];
  views: number;
  rating_avg: number;
  rating_count: number;
  is_verified: boolean;
  is_featured: boolean;
  created_at: string;
}
