<?php
// Plugin Name: No Publish

namespace trepmal\NoPublish;

// add_filter( 'wp_insert_post_data', function( $data, $postarr, $unsanitized_postarr ) {

// 	if ( $data['post_status'] === 'publish' && false !== strpos( strtolower( $data['post_title'] ), 'do not publish' ) ) {
// 		error_log( ' unsetting');
// 		unset( $data['post_status'] ); // === 'draft';
// 	}

// 	return $data;

// }, 10, 3 );


add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'no-publish',
		plugins_url( 'assets/no-publish-title-check.build.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
	);
// 	wp_localize_script( 'exportone', 'exportOne', array(
// 		'export_url' => $this->get_export_url(),
// 	) );
}