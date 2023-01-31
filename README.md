## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

# DATA MODEL

-Shopping List Items- (What we create in Supabase -tables-)
-ID
-created_at
-item
-quantity
-completed
-user_id (Needed in order to use RLS rules to restrict who can CRUD on the shopping list item/table)

# AUTH PAGE

-form
-input type for email and password
-button to submit
-redirect if not logged in

# SHOPPING LIST PAGE

1. On submit user should be able to add an item
   -get form data in submit listener
   -How?
   -formEl.addeventlistener('submit', async (e) => {
   e.preventdefault();
   })
   -const data = new Formdata(myFormEl);
   -data.get('object');
   -We use the form data to send the data to Supabase to create and store a new item.

2. On load - Fetch, render and append the items created from the table in Supabase by user account. (Items only show up based off of user account log in)
