export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }

  interface TelegramWebApp {
    ready(): void;
    expand(): void;
    initData: string;
    initDataUnsafe: {
      user?: TelegramUser;
    };
  }

  interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
  }
}
