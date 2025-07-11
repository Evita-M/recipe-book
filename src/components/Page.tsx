import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc';

export const Page = (params: any) => {
  return (
    <main
      className="mx-auto max-w-7xl flex-1 px-4"
      {...storyblokEditable(params.blok)}
    >
      {params.blok.blocks.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
