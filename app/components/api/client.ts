import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON;

if(!supabaseURL || !supabaseKey){
    throw Error("No supabase key or URL provided.");
}

const supabase: SupabaseClient = createClient (
    supabaseURL,
    supabaseKey
);

export default supabase;
