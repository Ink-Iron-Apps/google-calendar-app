export interface GoogleEvent {
  id: string;
  summary?: string;
  description?: string;
  start?: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end?: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  location?: string;
  colorId?: string;
  attendees?: Array<{
    email: string;
    displayName?: string;
    responseStatus?: string;
  }>;
  recurringEventId?: string;
}

export interface Calendar {
  // Rows come from the Supabase google_calendars table via select('*'),
  // so the fields are the table's snake_case columns - not the Google
  // Calendar API shape this interface previously described.
  calendar_id: string;
  calendar_name: string;
  id?: string;
  summary?: string;
  description?: string;
  primary?: boolean;
  colorId?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthSession {
  user: User;
  access_token: string;
  connected_calendars: Calendar[];
}