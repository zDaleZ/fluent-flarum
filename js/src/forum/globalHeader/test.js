import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';

export default function addTestButtons() {
    extend(HeaderSecondary.prototype, 'items', function (items) {
        let n = 5;
        while (n) {
            let dosomething = Function(`alert("Button ${n} is clicked!")`);
            items.add(n, <Button className="Button Button--flat" onclick={dosomething} icon="fas fa-square">{`${n}`}</Button>, n--);
        }
    });
}
