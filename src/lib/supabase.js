import { createClient as _createClient } from '@supabase/supabase-js';

// Muna fitar da shi da sunaye biyu don dacewa da duk fayilolin ka
export const createClient = () => {
  return _createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
};

// Wannan zai gyara error din "supabase is not exported" a duka pages din ka
export const supabase = createClient();




