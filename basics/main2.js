Vue.component('modal', {

	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		  	<div class="box">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia natus id temporibus repellendus, similique dolore dolorem a impedit odio debitis nihil, itaque saepe sit? Esse odit, saepe voluptatum! Ab.</p>
				</div>	
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`,


});

new Vue({
	el: '#root',

	data: {
		showModal: false
	}
});