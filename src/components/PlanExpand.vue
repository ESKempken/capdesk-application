<template>
    <q-list bordered class="rounded-borders">
		<table>
			<tr>
				<th style="width:50%">Features</th>
				<th>Basic</th>
				<th>Pro</th>
			</tr>
		</table>

		<q-expansion-item
			expand-separator
			icon="perm_identity"
			label="Account settings"
		>
			<q-card>
				<table>
					<tr>
						<td>Sample text</td>
						<td><i class="fa fa-remove"></i></td>
						<td><i class="fa fa-check"></i></td>
					</tr>
					<tr>
						<td>Sample text</td>
						<td><i class="fa fa-check"></i></td>
						<td><i class="fa fa-check"></i></td>
					</tr>
				</table>
			</q-card>
		</q-expansion-item>
		
	</q-list>
</template>

<script>
export default {
	props: {
		plans: Array,
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