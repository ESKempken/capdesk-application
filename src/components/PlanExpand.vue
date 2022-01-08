<template>

		<div class="row full-width">

			<div class="col-6"></div>
			<div v-for="plan in plans" class="col-2 text-h6 text-center text-bold" >
				{{ plan.title }}
				<q-icon :name="plan.icon" />
			</div>

		</div>

		<q-expansion-item
			v-for="group in featureGroups"
			:label="group.title"
			header-class="bg-accent"
			expand-icon="add"
			expanded-icon="remove"
			class="q-mt-sm text-body1 text-bold"
			header-style="border-radius: 3px"

			>
			<q-item v-for="feature in group.features" class="row full-width text-center text-weight-regular q-pt-md">
				
				<div class="col-6 text-left" >{{ feature.title }}</div>

				<div class="col-2 row justify-center">
					<q-icon v-if="feature.full.includes(1)" name="check_circle" />
					<div v-else-if="feature.half.includes(1)" class="text-caption" >
						{{ feature.label }}
					</div>
					<q-icon v-else name="not_interested" />
				</div>
		
				<div class="col-2 row justify-center">
					<q-icon v-if="feature.full.includes(2)" name="check_circle" />
					<div v-else-if="feature.half.includes(2)" class="text-caption" >
						{{ feature.label }}
					</div>
					<q-icon v-else name="not_interested" />
				</div>
			
				<div class="col-2 row justify-center">
					<q-icon v-if="feature.full.includes(3)" name="check_circle" />
					<div v-else-if="feature.half.includes(3)" class="text-caption" > 
						{{ feature.label }}
					</div>
					<q-icon v-else name="not_interested" />
				</div>

			</q-item>

		</q-expansion-item>

</template>

<script>
// state
import { mapState } from 'vuex'

export default {
	computed: {
		... mapState( 'plan', [ 'plans', 'featureGroups' ]),
	},
}
</script>