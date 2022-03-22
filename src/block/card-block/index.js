import './editor.css';
import './style.css';

const { registerBlockType } = wp.blocks;
const { PlainText, RichText, MediaUpload, InspectorControls } = wp.editor;

const { Button, PanelBody, TextControl } = wp.components;

registerBlockType( 'brad/border-box', {
	title: 'My Cool Border Box',
	icon: 'smiley',
	category: 'common',
	attributes: {
		imgUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		imgId: {
			type: 'number',
		},
		imgAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
		title: {
			type: 'string',
			source: 'text',
			selector: '.card-title',
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.card-content',
		},
		textField: {
			type: 'string',
		},
	},
	edit: function( props, attributes, setAttributes ) {
		// const { attributes, setAttributes } = props;
		const {
			textField,
		} = attributes;
		function onChangeTextField( newValue ) {
			setAttributes( { textField: newValue } );
		}

		function onFileSelect( img ) {
			props.setAttributes( {
				imgUrl: img.url,
				imgId: img.id,
				imgAlt: img.alt,
			} );
		}
		const onRemoveImg = () =>{
			props.setAttributes( {
				imgUrl: null,
				imgId: null,
				imgAlt: null,
			} );
		};
		return (
			<div>

				<div className="media-wrapper">
					{
						( props.attributes.imgUrl ) ? (
							<div className="img-upload-wrapper">
								<img
									src={ props.attributes.imgUrl }
									alt={ props.attributes.imgAlt }
								/>
								{ ( props.isSelected ) ? (
									<Button onClick={ onRemoveImg }>Remove</Button>
								) : null }
							</div>

						) : (
							<div className="media-upload-btn">
								<MediaUpload
									onSelect={ onFileSelect }
									value={ 1 }
									allowedTypes={ [ 'image' ] }
									render={ ( { open } ) =>
										<Button className="button" onClick={ open }>Add Image </Button> }
								/>
							</div>

						)
					}

				</div>
				<InspectorControls>
					<PanelBody title="Settings" initialOpen={ false }>
						<TextControl
							label="Text Field"
							help="Additional help text"
							value={ textField }
							onChange={ onChangeTextField }
						/>
						{ /* <TextareaControl
							label="Text"
							help="Enter some text"
							value={ text }
							onChange={ ( value ) => setText( value ) }
						/> */ }
					</PanelBody>
				</InspectorControls>

				<div className="card-title">
					<PlainText
						onChange={ newTitle=>{
							props.setAttributes( { title: newTitle } );
						} }
						value={ props.attributes.textField }
						className="heading"
						placeholder="Card Title"
					/>
					<RichText
						onChange={ newContent=>{
							props.setAttributes( { content: newContent } );
						} }
						value={ props.attributes.content }
						className="card-description"
						multiline="p"
						placeholder="Card Content"
					/>
				</div>

			</div>

		);
	},
	save: function( props ) {
		return (
			<div className={ props.className } style="width:260px">
				<div className="image">
					<div className="img-wrapper">
						<img
							src={ props.attributes.imgUrl }
							alt={ props.attributes.imgAlt }
						/>
					</div>
					<div className="card-details">
						<h5 className="card-title">{ props.attributes.textField }</h5>
						<p className="card-content">{ props.attributes.content }</p>
					</div>
				</div>
			</div>

		);
	},
} );
