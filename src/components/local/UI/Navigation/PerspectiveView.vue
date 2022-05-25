<template>
  <div id="perspective" class="perspective effect-airbnb">
    <div class="p-container">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg> -->
      <div class="wrapper">
        <slot name="content"></slot>
      </div>
    </div>

    <!-- <fa :icon="['fa', 'arrow-right']" class="p-arrow" /> -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>

    <div class="outer-nav left vertical">
      <div class="w-full child-outer-nav">
        <div class="res-menu-header">
          <div class="res_carousel__item relative">
            <div class="res-author-img">
              <img class="w-[70px] rounded-full md:w-[200px]" src="@/assets/img/bvv/niko-latest.png" />
            </div>
            <div class="res-author-text">
              <h5>Name</h5>
              <p><fa :icon="['fa', 'check-circle']" class="text-skin-border-color" /> content</p>
            </div>
          </div>
        </div>
        <slot name="nav"></slot>
        <div class="res-connect-wallet relative block w-[100%] overflow-hidden md:hidden">
          <base-button
            mode="w-36 rounded-md bg-skin-button-featured text-center mt-12 p-2"
            id="resConnectWallet"
          >
            Connect Wallet
          </base-button>
          <div class="mx-auto w-36 rounded-md bg-skin-button-featured text-center mt-12 p-2 opacity-0">
            <wallet-multi-button dark />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import useClassie from '@/composables/classie';
import '@/assets/css/navigation/perspective-view.css';
import { WalletMultiButton } from 'solana-wallets-vue';

export default {
  components: { WalletMultiButton },
  setup() {
    const { classie } = useClassie();

    // @todo Please refactor the below arrow functions etc. Then needs to moved to util class

    const docElem = window.document.documentElement;
    const support = window.Modernizr.csstransitions;
    const transEndEventNames: any = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd',
      msTransition: 'MSTransitionEnd',
      transition: 'transitionend',
    };

    const transEndEventName = transEndEventNames[window.Modernizr.prefixed('transition')];
    let docscroll = 0;
    // click event (if mobile use touchstart)
    const clickEvent = mobilecheck() ? 'touchstart' : 'click';

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    function mobilecheck() {
      var check = false;
      (function (a) {
        if (
          /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }

    function init() {
      let showMenu = document.getElementById('showMenu'),
        perspectiveWrapper = document.getElementById('perspective'),
        container = perspectiveWrapper.querySelector('.p-container'),
        arrowcontainer = perspectiveWrapper.querySelector('.p-arrow'),
        contentWrapper = container.querySelector('.wrapper');

      showMenu.addEventListener(clickEvent, function (ev) {
        ev.stopPropagation();
        // ev.preventDefault();
        docscroll = scrollY();
        // change top of contentWrapper
        contentWrapper.style.top = docscroll * -1 + 'px';
        // mac chrome issue:
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // add modalview class
        classie.add(perspectiveWrapper, 'modalview');
        // animate..
        setTimeout(function () {
          classie.add(perspectiveWrapper, 'animate');
        }, 25);
      });
      
      arrowcontainer.addEventListener(clickEvent, function (ev) {
        classie.add(container, 'transform');
        if (classie.has(perspectiveWrapper, 'animate')) {
          let onEndTransFn = function (ev) {
            if (
              support &&
              (ev.target.className !== 'p-container' || ev.propertyName.indexOf('transform') == -1)
            )
              return;
            window.removeEventListener(transEndEventName, onEndTransFn);
            classie.remove(perspectiveWrapper, 'modalview');
            classie.remove(container, 'transform');
            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = docscroll;
            // change top of contentWrapper
            contentWrapper.style.top = '0px';
          };
          if (support) {
            perspectiveWrapper.addEventListener(transEndEventName, onEndTransFn);
          } else {
            onEndTransFn.call();
          }
          classie.remove(perspectiveWrapper, 'animate');
        }

        if (!classie.has(perspectiveWrapper, 'animate')) {
          setTimeout(function () {
            classie.remove(perspectiveWrapper, 'modalview');
          }, 500);
        }
      });
      
      container.addEventListener(clickEvent, function (ev) {
        classie.add(container, 'transform');
        if (classie.has(perspectiveWrapper, 'animate')) {
          let onEndTransFn = function (ev) {
            if (
              support &&
              (ev.target.className !== 'p-container' || ev.propertyName.indexOf('transform') == -1)
            )
              return;
            window.removeEventListener(transEndEventName, onEndTransFn);
            classie.remove(perspectiveWrapper, 'modalview');
            classie.remove(container, 'transform');
            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = docscroll;
            // change top of contentWrapper
            contentWrapper.style.top = '0px';
          };
          if (support) {
            perspectiveWrapper.addEventListener(transEndEventName, onEndTransFn);
          } else {
            onEndTransFn.call();
          }
          classie.remove(perspectiveWrapper, 'animate');
        }

        if (!classie.has(perspectiveWrapper, 'animate')) {
          setTimeout(function () {
            classie.remove(perspectiveWrapper, 'modalview');
          }, 500);
        }
      });

      perspectiveWrapper.addEventListener(clickEvent, function (ev) {
        return false;
      });
    }

    onMounted(() => {
      init();
    });
  },
};
</script>

<style>
#resConnectWallet {
  color: black;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.child-outer-nav {
  height: 75%;
}
</style>