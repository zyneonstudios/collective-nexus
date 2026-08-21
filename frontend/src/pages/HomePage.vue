<script setup>

</script>

<template>
  <div class="rounded-2xl space-y-3 border m-4 md:m-8 shadow-sm p-3 px-4 sm:px-5 sm:p-4 border-zinc-800 bg-zinc-900">
    <h3 class="font-semibold text-white">Neueste Inhalte</h3>
    <hr class="border-zinc-800 mb-4" />
    <div class="flex flex-col gap-4 xl:flex-row">
      <div class="rounded-xl p-3 w-full content-card px-4 border shadow-sm border-zinc-800 bg-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/75 transition hover:cursor-pointer">
        <strong>Titel</strong>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="rounded-xl w-full content-card p-3 px-4 border shadow-sm border-zinc-800 bg-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/75 transition hover:cursor-pointer">
        <strong>Titel</strong>
        <p>Inhalt</p>
      </div>
      <div class="rounded-xl p-3 w-full content-card px-4 border shadow-sm border-zinc-800 bg-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/75 transition hover:cursor-pointer">
        <strong>Titel</strong>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-card {
  min-height: 12rem;
  max-height: 12rem;
  overflow: hidden;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    line-clamp: 5;

    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>