import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';
import LinkButton from 'flarum/common/components/LinkButton';

export default function addTestButtons() {
    extend(HeaderPrimary.prototype, 'items', function (items) {
        let n = 8;
        while (n) {
            let href = `#${n}`;
            let dosomething = Function(`alert("Link ${n} is clicked!");return false`);
            items.add(n, <LinkButton 
                class={'LinksButton Button Button--link'} 
                active={false} 
                href={href}
                onclick={dosomething}>{`link ${n}`}</LinkButton>, -(n--));
        }
    });

    extend(HeaderSecondary.prototype, 'items', function (items) {
        let n = 5;
        while (n) {
            let dosomething = Function(`alert("Button ${n} is clicked!")`);
            items.add(n, <Button className="Button Button--flat" onclick={dosomething} icon="fas fa-square">{`${n}`}</Button>, n--);
        }
    });
}
