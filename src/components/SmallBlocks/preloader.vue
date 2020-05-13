<template>
  <div :class="`preloader ${this.item}`">
    <div v-if="this.item === 'cube-grid'" class="sk-cube-grid preloader__item">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
    <div v-if="this.item === 'pulse'" class="card-body">
      <div class="sk-spinner sk-spinner-pulse preloader__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    item: String
  }
};
</script>

<style lang="sass">
.preloader
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 99999
  &__item
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  &:before
    content: ''
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: $white
    z-index: -1
  &.pulse
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    z-index: 10
  &--parent
    position: relative
// .preloader end

.sk-cube-grid
  position: relative
  width: 40px
  height: 40px
  .sk-cube
    width: 33%
    height: 33%
    background-color: $preload-item-color
    float: left
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out
  .sk-cube1
    animation-delay: .2s
  .sk-cube2
    animation-delay: .3s
  .sk-cube3
    animation-delay: .4s
  .sk-cube4
    animation-delay: .1s
  .sk-cube5
    animation-delay: .2s
  .sk-cube6
    animation-delay: .3s
  .sk-cube7
    animation-delay: 0s
  .sk-cube8
    animation-delay: .1s
  .sk-cube9
    animation-delay: .2s
@-webkit-keyframes sk-cubeGridScaleDelay
  0%, 70%, 100%
    transform: scale3D(1, 1, 1)
  35%
    transform: scale3D(0, 0, 1)
@keyframes sk-cubeGridScaleDelay
  0%, 70%, 100%
    transform: scale3D(1, 1, 1)
  35%
    transform: scale3D(0, 0, 1)
// .sk-cube-grid end

.sk-spinner-pulse.sk-spinner
  width: 40px
  height: 40px
  margin: 0 auto
  background-color: $primary
  border-radius: 100%
  animation: sk-pulseScaleOut 1s infinite ease-in-out
@-webkit-keyframes sk-pulseScaleOut
  0%
    transform: scale(0)
  100%
    transform: scale(1)
    opacity: 0
@keyframes sk-pulseScaleOut
  0%
    transform: scale(0)
  100%
    transform: scale(1)
    opacity: 0
// .sk-spinner-pulse.sk-spinner end
</style>
