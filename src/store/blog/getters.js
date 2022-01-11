export function getPostList ( state ) {
    return function( limit, sort, desc ) {

		// state copy
		var list = state.posts.slice()

		// sort functions
		if ( sort == 'date' ) {
			list.sort( function( a, b ){
				return new Date( b.date ) - new Date( a.date )
			})
			if ( desc ) { list.reverse() }
		}
		if ( sort == 'title' ) {
			list.sort( function( a, b ){
				var a = a.title.toUpperCase() // ignore upper and lowercase
				var b = b.title.toUpperCase() // ignore upper and lowercase

				if ( desc ) {
					var x = 1
					var y = -1
				} else {
					var x = -1
					var y = 1
				}

				if (a < b) return x
				if (a > b) return y
				return 0
			})
		}
		

		// apply limit
		return list.slice( 0, limit )

	}
}