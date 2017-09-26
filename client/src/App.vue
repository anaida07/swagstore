<template>
  <div id="app">
    <header>
      <b-container class='products_wrapper'>
        <b-row>
          <b-col cols='4'><img src='./assets/images/cf-logo-header.png' /></b-col>
          <b-col>
            <ul>
              <li><a href="#"><i class="fa fa-user-o"></i></a></li>
              <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
              <li><a href="#"><i class="fa fa-shopping-basket"></i></a></li>
              <li><a href="#"><i class="fa fa-th-large"></i></a></li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
