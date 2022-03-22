// Stripped down version of src/block/block.js

// PART 1: Import dependencies

// PART 2: Setup references to external functions
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// PART 3: Register the block!
registerBlockType( 'cgb/block-test', {

	// Part 3.1: Block settings
	title: __( 'Inspector ' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'test &mdash; CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	// PART 3.2: Markup in editor
	edit: function() {
		return (
			<div>You’ll see this in the editor</div>
		);
	},

	// PART 3.3: Markup saved to database
	save: function() {
		return (
			<div>This is saved to the database and returned with the_content();</div>
		);
	},
} );
