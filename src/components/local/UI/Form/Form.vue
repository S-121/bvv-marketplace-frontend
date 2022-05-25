<template>
  <div class="contact_form">
    <form id="main_contact_form" action="#" method="post" novalidate>
      <b-row>
        <b-col col="12">
          <div id="success_fail_info" />
        </b-col>

        <slot />
      </b-row>
    </form>
  </div>
</template>
