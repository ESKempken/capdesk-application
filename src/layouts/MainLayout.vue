
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Ellis Kempken
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab :to="{ name: 'audit' }" label="Task 1: Audit" />
        <q-route-tab :to="{ name: 'pricing' }" label="Task 2: Pricing" />
        <q-route-tab :to="{ name: 'blog' }" label="Task 3: Blog" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>