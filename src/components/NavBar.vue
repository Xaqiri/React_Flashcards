<script setup lang="ts"></script>

<template>
  <div id="nav-bar">
    <div class="colored">Flashcards</div>
    <nav id="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/signin">Sign in</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
#nav-bar {
  padding: 0.5rem;
  font-size: 24pt;
  display: flex;
  border-bottom: 2px solid cyan;
  justify-content: space-between;
  align-items: center;
  color: hsla(200, 100%, 80%, 0.5);
}

#nav-links {
  display: flex;
  font-size: 16pt;
  gap: 0.5em;
}

a,
.colored {
  text-decoration: none;
  color: hsla(200, 100%, 80%, 1);
  transition: 0.4s;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(200, 100%, 80%, 0.5);
  }

  .colored:hover {
    color: hsla(200, 100%, 80%, 0.5);
  }
}
</style>
