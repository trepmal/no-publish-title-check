<?php
// Plugin Name: No Publish

namespace trepmal\NoPublish;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'no-publish',
		plugins_url( 'assets/no-publish-title-check.build.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
	);
}