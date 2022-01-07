<template>
    <q-list bordered class="rounded-borders">
		<table>
			<tr>
				<th style="width:50%">Features</th>
				<th>Basic</th>
				<th>Pro</th>
			</tr>
		</table>

		<div v-for="group in featureGroups">
			<q-expansion-item
				expand-separator
				:label="group.title"
				>
				<q-card>
					<table>
						<tr v-for="feature in group.features">
							<td>{{ feature.title }}</td>
	
							<td>
								<q-icon v-if="feature.full.includes(1)" name="font_download" />
								
								<div v-else-if="feature.half">
									Text field
								</div>
							</td>


						</tr>
					</table>
				</q-card>
			</q-expansion-item>
		</div>

	</q-list>
</template>

<script>
// state
import { mapState } from 'vuex'

export default {
	computed: {
		... mapState( 'plan', [ 'featureGroups' ]),
	},
	methods: {
		label(feature, planId) {
			feature.half.find( label => label.id == planId )
		}
	}
}
</script>


<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: center;
  padding: 16px;
}

th:first-child, td:first-child {
  text-align: left;
}

.fa-check {
  color: green;
}
.fa-remove {
  color: red;
}
</style>