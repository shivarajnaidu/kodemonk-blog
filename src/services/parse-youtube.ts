import { visit } from 'unist-util-visit';
import type { Root, Text, Paragraph } from 'mdast';

function isUrlValid(userInput: string) {
    const res = userInput.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    return res != null;
}

interface Options {
    width?: number;
    height?: number;
}

const remarkYoutube = (opts?: Readonly<Options> | null | undefined) => {
    const options: Options = {
        width: 500,
        height: 300,
        ...opts,
    }

    return (tree: Root) => {
        visit(tree, 'inlineCode', node => {
            const { value } = node;

            if (value.startsWith(`youtube:`)) {

                const videoUrl = value.slice(8).trim();
                if (isUrlValid(videoUrl)) {
                    // const URL_PATTERN = /^https:\/\/(?:youtu\.be\/|www\.youtube\.com\/watch\?v=)(\w+)$/;
                    const URL_PATTERN = /^https:\/\/(?:youtu\.be\/|www\.youtube\.com\/watch\?v=)(\w+)(?:&.*)?$/;
                    const match = videoUrl.match(URL_PATTERN);

                    if (match && match[1]) {
                        const videoId = match[1];
                        (node as any).type = 'paragraph'
                        const text: Text = {
                            type: 'text',
                            value: videoUrl,
                            data: {
                                hName: 'iframe',
                                hProperties: {
                                    width: options?.width,
                                    height: options?.height,
                                    src: `https://www.youtube.com/embed/${videoId}`,
                                    frameborder: '0',
                                    allow:
                                        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                                    allowfullscreen: true,
                                },
                                hChildren: [],
                            },
                        };

                        (node as any).children = [text];
                    }


                    // Object.assign(node, n)
                }
            }

        });

        return tree;
    };
};


export default remarkYoutube;