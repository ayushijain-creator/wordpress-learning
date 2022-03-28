// Stripped down version of src/block/block.js

// PART 1: Import dependencies

// PART 2: Setup references to external functions
const { registerBlockType } = wp.blocks;

// PART 3: Register the block!
registerBlockType( 'cgb/block-test', {

	// Part 3.1: Block settings
	title: ( 'Inspector Control Block' ),
	icon: 'shield',
	category: 'common',

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
