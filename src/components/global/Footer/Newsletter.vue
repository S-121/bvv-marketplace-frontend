<template>
  <div class="footer-widget newsletter-widget">
    <h3 class="has-line-center after:bg-skin-border-color">Newsletter</h3>
    <div class="widget-content">
      <div class="text">Stay Updated with our latest news. We promise not to spam</div>
      <div class="newsletter-form">
        <form method="post">
          <div class="form-group">
            <input
              type="email"
              name="field-name"
              value=""
              placeholder="Your Email"
              class="focus:ring-skin-color"
            />
            <button type="submit" class="send-btn">
              <fa :icon="['far', 'paper-plane']" class="text-skin-border-color" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
