import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kqwtcclvefodxqldijhh.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_8p2sGu1KevPySaNpFr2JLA_13OhwK3h';

if(!supabaseURL || !supabaseKey){
    throw Error("No supabase key or URL provided.");
}

const supabase: SupabaseClient = createClient (
    supabaseURL,
    supabaseKey
);

export default supabase;
