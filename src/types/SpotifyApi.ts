export interface SpotifyAuthApiResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export interface SpotifyUserProfile {
  // country: string;
  display_name: string;
  // email: string;
  // explicit_content: {
  //   filter_enabled: boolean;
  //   filter_locked: boolean;
  // };
  // external_urls: {
  //   spotify: string;
  // };
  // followers: {
  //   href: string;
  //   total: number;
  // };
  // href: string;
  id: string;
  imageUrl?: string;
  // images?: {
  //   url: string;
  //   height: number;
  //   width: number;
  // }[];
  // product: string;
  // type: string;
  // uri: string;
}
