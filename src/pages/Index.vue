<template>
  	<q-page class="contain--wide">
		<div class="bg-indigo-1" >
			<section>
				<div class="text-h5 text-bold">Plans</div>

				<div class="row q-mt-xl">
					<div class="col">
						<div class="row q-col-gutter-lg">
							<plan-card v-for="plan in plans" :key="plan.id" :plan="plan" class="col-12 col-sm-4" />
						</div>
					</div>
				</div>

			</section>
		</div>

		<section>
			<div class="text-h5 text-bold">Compare plans</div>
			<br>
			<div class="text-body2">Please note ... Lorem ipsum dolor</div>
			<br>
			<plan-expand />

		</section>

  	</q-page>
</template>

<script>
// components
import PlanCard from 'src/components/PlanCard.vue'
import PlanExpand from 'src/components/PlanExpand.vue'
// state
import { mapState } from 'vuex'

export default {
	computed: {
		... mapState('plan', [ 'plans' ])
	},
	components: {
		PlanCard,
		PlanExpand,
	},
}
</script>

<style lang="scss" scoped>
.contain--wide{
	section {
		max-width: 800px; 
		margin: 0 auto;
		padding: 100px 12px;
	}
}
</style>