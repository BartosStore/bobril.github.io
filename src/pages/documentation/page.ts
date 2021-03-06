import * as b from 'bobril';
import * as GeneratedDoc from '../../generatedDoc/page';

const documentation = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = GeneratedDoc.create();
    }
});

export default documentation;
