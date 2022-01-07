<template>
	<div>
		<q-card class="planCard_card text-primary">
			<q-card-section class="planCard_card--header row justify-center items-center">
				<q-icon color="primary" name="bluetooth" size="2em" class="q-mr-sm"/>
				<div class="text-h5 text-bold">{{ plan.title }}</div>
			</q-card-section>

		<div class="planCard_card--body column text-center">
			<q-card-section
				v-if="plan.startPrice" 
				class="col-grow bg-secondary text-body1"
				>	
				From <b>€{{ plan.startPrice.monthly }}</b> per month<br>
				<b>+ €{{ plan.startPrice.employee }}</b> per employee<br>
				on share plan<br>
				<i>Paid annually</i>
			</q-card-section>

			<q-card-section 
				v-if="plan.continuedPrice" 
				class="col bg-info text-caption"
				>
				From <b>€{{ plan.continuedPrice.monthly }}</b> per month<br>
				<b>+ €{{ plan.continuedPrice.employee }}</b> per employee<br>
				on share plan<br>
				<i>Paid annually</i>
			</q-card-section>
		
			<q-card-section 
				v-if="plan.tailorPrice"
				class="col bg-secondary text-body1 column full-height justify-center"
				>
				<b>Tailored pricing</b>
			</q-card-section>

		</div>			

			<q-card-section 
				class="text-caption"
				>
				<div style="margin-left: 1em;">
					Whats included?
					<ul class="no-padding no-margin text-bold">
						<li v-for="item in plan.features">{{ item }}</li>
					</ul>
				</div>
			</q-card-section>

		</q-card>
	</div>
</template>

<script>
export default {
	props: {
		plan: Object,
	},
}
</script>

<style lang="scss" scoped>
.planCard_card {
	height: 480px;
	.q-card__section--vert {
		padding: 16px 26px;
	}
	
}
.planCard_card--header {
	height: 15%;
}
.planCard_card--body {
	height: 50%;
}

</style>