<template>
	<q-page class="contain--wide text-primary">
		<section>
			
			<div class="text-h5 text-bold">Browse Blog Posts</div>
			<div class="q-py-lg">	
				<q-card flat class="bg-accent row full-width justify-between">
					<q-list>
						<q-item class="col-shrink">
							<q-item-section no-wrap >
								<q-item-label>
									Sort
									<q-icon size="1.5em" color="primary" name="sort" class="q-pl-xs" />
								</q-item-label>
							</q-item-section>
							<q-item-section>
								<q-chip  
									@click="sort = 'title'" 
									clickable color="primary" text-color="white" 
									:outline="sort == 'title' ? false : true"
									>
									Title
								</q-chip>
							</q-item-section>
							<q-item-section>
							<q-chip 
								@click="sort = 'date'" 
								clickable color="primary" text-color="white"
								:outline="sort == 'date' ? false : true"
								>
								Date
							</q-chip>
							</q-item-section>
						</q-item>
					</q-list>
					<q-list class="row">
						<q-item>
							<q-item-section>Order</q-item-section>
							<q-item-section avatar>
								<q-chip 
									:label="decs ? 'Desc' : 'Asc '"
									icon="swap_vert" clickable @click="decs = !decs" 
									color="primary" text-color="white" />
							</q-item-section>
						</q-item>
					</q-list>
				</q-card>
			</div>

			<div class="q-gutter-md">

				<q-card v-for="post in list" flat bordered>
					<q-card-section horizontal>
						<q-card-section class="q-pt-xs">
							<div class="text-overline">{{ post.author }} | {{ post.date }}</div>
							<div class="text-h5 q-mt-sm q-mb-xs">{{ post.title }}</div>
							<div class="text-caption text-grey">
								{{ post.content }}
							</div>
						</q-card-section>

						<q-card-section class="col-5 flex flex-center">
							<q-img
								class="rounded-borders"
								src="https://cdn.quasar.dev/img/parallax2.jpg"
							/>
						</q-card-section>
					</q-card-section>
				</q-card>


				<q-item-label v-if="showMore" class="column" >
					<q-btn 
						@click="limit = limit + 5"
						color="accent"
						unelevated 
						text-color="primary">Show More</q-btn>
				</q-item-label>
			</div>

		</section>
	</q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data(){ 
		return {
			limit: 3,
			sort: 'date',
			decs: false,
		}
	},
	methods: {
		... mapGetters( 'blog', [ 'getPostList' ]),
	},
	computed: {
		list(){
			return this.getPostList()( this.limit, this.sort, this.decs )
		},
		showMore(){
			return this.list.length < this.limit ? false : true 
		}
	}
}
</script>