// Stripped down version of src/block/block.js

// PART 1: Import dependencies

// PART 2: Setup references to external functions
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// PART 3: Register the block!
registerBlockType( 'ideapro/custom-block', {

	// Part 3.1: Block settings
	title: __( 'Contact Custom Block' ),
	icon: 'hammer',
	category: 'common',
	attributes: {
		companyName: {
			type: 'string',
		},
		companyPhone: {
			type: 'string',
		},
		companyAddress: {
			type: 'string',
		},
		companyAddress2: {
			type: 'string',
		},
		companyCity: {
			type: 'string',
		},
		companyState: {
			type: 'string',
		},
		companyZip: {
			type: 'string',
		},
	},
	// PART 3.2: Markup in editor
	edit: function( props ) {
		function updateCompanyName( event ) {
			props.setAttributes( { companyName: event.target.value } );
		}
		function updateCompanyPhone( event ) {
			props.setAttributes( { companyPhone: event.target.value } );
		}
		function updateCompanyAddress( event ) {
			props.setAttributes( { companyAddress: event.target.value } );
		}
		function updateCompanyAddress2( event ) {
			props.setAttributes( { companyAddress2: event.target.value } );
		}
		function updateCompanyCity( event ) {
			props.setAttributes( { companyCity: event.target.value } );
		}
		function updateCompanyState( event ) {
			props.setAttributes( { companyState: event.target.value } );
		}
		function updateCompanyZip( event ) {
			props.setAttributes( { companyZip: event.target.value } );
		}

		return wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company Name ' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyName,
			onChange: updateCompanyName,
			placeholder: 'company name',
		} ) ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company Phone ' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyPhone,
			onChange: updateCompanyPhone,
			placeholder: 'company phone',
		} ) ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company Address' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyAddress,
			onChange: updateCompanyAddress,
			placeholder: 'company address',
		} ) ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company Address2' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyAddress2,
			onChange: updateCompanyAddress2,
			pl2aceholder: 'company address2',
		} ) ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company City ' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyCity,
			onChange: updateCompanyCity,
			placeholder: 'company city',
		} ) ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company State ' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyState,
			onChange: updateCompanyState,
			placeholder: 'company state',
		} ) ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'label', null, 'Company Zip' ), /*#__PURE__*/wp.element.createElement( 'br', null ), /*#__PURE__*/wp.element.createElement( 'input', {
			type: 'text',
			value: props.attributes.companyZip,
			onChange: updateCompanyZip,
			placeholder: 'company zip',
		} ) ) );
	},

	// PART 3.3: Markup saved to database
	save: function( props ) {
		return wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'h3', null, props.attributes.companyName ), /*#__PURE__*/wp.element.createElement( 'div', null, props.attributes.companyPhone, ' ' ), /*#__PURE__*/wp.element.createElement( 'span', null, props.attributes.companyAddress, ' ' ), /*#__PURE__*/wp.element.createElement( 'span', null, props.attributes.companyAddress2, ' ' ), /*#__PURE__*/wp.element.createElement( 'div', null, /*#__PURE__*/wp.element.createElement( 'span', null, props.attributes.companyCity, ' ' ), /*#__PURE__*/wp.element.createElement( 'span', null, props.attributes.companyState, ' ' ), /*#__PURE__*/wp.element.createElement( 'span', null, props.attributes.companyZip, ' ' ) ) );
	},
} );
