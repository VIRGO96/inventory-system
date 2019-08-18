<template>
    	<div class="limiter">
		<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
				<b><strong><i>Account Login</i></strong></b>	
				</span>
				<form class="login100-form validate-form p-b-33 p-t-5">
					<div class="row">
						<div class="offset-md-3 col-md-6">
          <img src="../assets/img/vue-logo.png" alt="" style="width: 160px;height: 100px;"/>

						</div>
					</div>

					<div class="wrap-input100 validate-input" >
                        
						<input class="input100" type="text" name="username" placeholder="Username">
                        <span class="focus-input100" style="top:44px;left:35px;">
                            <i class="fas fa-user" style="font-size:24px"></i>
                        </span> 
					</div>

					<div class="wrap-input100 validate-input" >
						<input class="input100" type="password" name="pass" placeholder="Password">
                        <span class="focus-input100" style="top:44px;left:35px;">
                            <i class="fas fa-unlock-alt" style="font-size:24px"></i></span> 
					</div>
					<div class="container-login100-form-btn m-t-32">
						<button style="background-color:#555555;" @click="redirectDashboard" class="login100-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	methods:{
		redirectDashboard(){
			this.$router.push({path:'/dashboard'})
		}
	}
}
</script>
