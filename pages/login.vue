<template>
  <div class="w-full max-w-2xl h-9 prose">
    <h1>Log in to {{ title }}</h1>
    <button
      @click="login"
      class="text-white bg-green-500 font-bold py-2 px-4 rounded"
    >
      Log in with Github
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = useCoures();

const supabase = useSupabaseClient();

const login = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  console.log(data);
  if (error) {
    console.error(error);
  }
};
</script>