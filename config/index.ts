import { SupabaseConfig, SupabaseServerConfig } from "@/config/supabase";

const Config = {
  supabaseConfig: SupabaseConfig,
  supabaseServerConfig: SupabaseServerConfig,
};

export default Config;

export type ConfigType = typeof Config;
