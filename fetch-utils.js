const SUPABASE_URL = 'https://iudwxayjxecgwjeagrxm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZHd4YXlqeGVjZ3dqZWFncnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MjI4MzIsImV4cCI6MTk5MDA5ODgzMn0.M4jIDI8h0jzNN-c5n-GUBEaYhy1WmI9qxDja3jyUfTc';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createList() {
    const { data, error } = await client.from('item-list').insert([
        {
            todo,
        },
    ]);
    return data;
}
