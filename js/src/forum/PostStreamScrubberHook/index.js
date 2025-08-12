import PostStreamScrubber from "flarum/forum/components/PostStreamScrubber";
import { extend } from "flarum/common/extend";

export default function hookScrubber() {
  extend(PostStreamScrubber.prototype, 'updateScrubberValues', function () {
    const $scrubber = this.$();
    const index = this.stream.index;
    const count = this.stream.count();
    const visible = this.stream.visible || 1;
    const percentPerPost = this.percentPerPost();
    const before = Math.max(0, percentPerPost.index * Math.min(index - 1, count - visible));
    const handle = Math.min(100 - before, percentPerPost.visible * visible);
    const progress = before + (handle / 2);
    $scrubber.find('.Scrubber-scrollbar').css('--progress', `${progress}%`);
  })
}