// place files you want to import through the `$lib` alias in this folder.
import { GraphQLClient } from 'graphql-request';

// place files you want to import through the `$lib` alias in this folder.
function resolveRichText(nodes: any[]) {
	return nodes.map((c) => resolveRichTextNode(c)).join('');
}

function resolveRichTextNode(node: {
	children: any[];
	type: any;
	level: any;
	text: string;
	bold: any;
	code: any;
	italic: any;
	strikethrough: any;
	underline: any;
	url: any;
	format: any;
	image: { url: any; height: any; width: any; alternativeText: any };
}) {
	let html = '';
	const children = node.children
		? node.children.map((c: any) => resolveRichTextNode(c)).join('')
		: '';

	switch (node.type) {
		case 'heading':
			html = `<h${node.level}>${children}</h${node.level}>`;
			break;
		case 'text':
			if (node.text) {
				let tmp = node.text.replaceAll('\n', '<br />');

				if (node.bold) tmp = `<b>${tmp}</b>`;
				if (node.code) tmp = `<code>${tmp}</code>`;
				if (node.italic) tmp = `<i>${tmp}</i>`;
				if (node.strikethrough) tmp = `<s>${tmp}</s>`;
				if (node.underline) tmp = `<u>${tmp}</u>`;

				html = tmp;
			}
			break;
		case 'paragraph':
			html = `<p>${children}</p>`;
			break;
		case 'link':
			html = `<a href="${node.url}">${children}</a>`;
			break;
		case 'list':
			switch (node.format) {
				case 'ordered':
					html = `<ol>${children}</ol>`;
					break;
				case 'unordered':
					html = `<ul>${children}</ul>`;
					break;
			}
			break;
		case 'list-item':
			html = `<li>${children}</li>`;
			break;
		case 'quote':
			html = `<blockquote>${children}</blockquote>`;
			break;
		case 'code':
			html = `<pre>${children}</pre>`;
			break;
		case 'image':
			if (node.image) {
				html = `<img src="${node.image.url}" height="${node.image.height}" width="${node.image.width}" alt="${node.image.alternativeText}" />`;
			}
			break;
	}

	return html;
}

const serverUrl = 'https://strapi.12thwonder.com';

const client = new GraphQLClient(serverUrl + '/graphql');

export { serverUrl, resolveRichText, client };
