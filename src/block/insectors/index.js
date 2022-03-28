import { registerBlockType } from '@wordpress/blocks';
import {
	RadioControl,
	TextControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';
import {
	RichText,
	InspectorControls,
	useBlockProps,
	PlainText,
} from '@wordpress/block-editor';

registerBlockType( 'my-plugin/inspector-controls-example', {
	apiVersion: 2,

	title: 'Inspector controls example',

	icon: 'universal-access-alt',

	category: 'design',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		checkboxField: {
			type: 'boolean',
			default: true,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		textField: {
			type: 'string',
		},
		toggleField: {
			type: 'boolean',
		},
		selectField: {
			type: 'string',
		},
	},

	edit( { attributes, setAttributes } ) {
		const blockProps = useBlockProps();
		const {
			content,
			radioField,
			textField,
			selectField,
		} = attributes;

		function onChangeContent( newContent ) {
			setAttributes( { content: newContent } );
		}

		function onChangeRadioField( newValue ) {
			setAttributes( { radioField: newValue } );
		}

		function onChangeTextField( newValue ) {
			setAttributes( { textField: newValue } );
		}

		function onChangeSelectField( newValue ) {
			setAttributes( { selectField: newValue } );
		}

		return ( [
			// eslint-disable-next-line react/jsx-key
			<div { ...blockProps }>

				<InspectorControls>
					<PanelBody title={ ( 'Settings' ) }>
						<RadioControl
							label="Radio Field"
							selected={ radioField }
							options={ [
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							] }
							onChange={ onChangeRadioField } />
						{ /* <TextControl
							label="Text Field"
							help="Additional help text"
							value={ textField }
							onChange={ onChangeTextField } /> */ }
						{ radioField === 'yes' ? <TextControl
							label="Text Field"
							help="Additional help text"
							value={ textField }
							onChange={ onChangeTextField } /> : null }
						<SelectControl
							label="Select Control"
							value={ selectField }
							options={ [
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							] }
							onChange={ onChangeSelectField } />
					</PanelBody>
				</InspectorControls>
				<div>
					<li>Radio Field: { radioField }</li>
					{ radioField === 'yes' ? <PlainText value={ radioField === 'yes' ? textField : null } /> : null }
					<RichText
						{ ...blockProps }
						key="editable"
						tagName="p"
						onChange={ onChangeContent }
						value={ content } />
				</div>

			</div>,
		] );
	},

	save( { attributes } ) {
		const {
			content,
			radioField,
			textField,
			selectField,
		} = attributes;
		const blockProps = useBlockProps.save();

		return (
			<div { ...blockProps }>
				<RichText.Content value={ content } tagName="p" />

				<h2>Inspector Control Fields</h2>
				<ul>
					<li>Radio Field: { radioField }</li>
					{ /* <li> Text Field: { radioField === 'yes' ? { textField } : null } </li> */ }
					<li>Text Field: { textField }</li>
					<li>Select Field: { selectField }</li>
				</ul>
			</div>
		);
	},
} );
