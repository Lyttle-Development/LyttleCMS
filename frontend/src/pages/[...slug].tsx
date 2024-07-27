import { Lib } from '@frontend/libs';
import { GetStaticPaths, GetStaticProps } from 'next';
import Page from '@frontend/pages/index';

export const SubPage = Page;

export const getStaticPaths: GetStaticPaths = Lib.getStaticPaths;
export const getStaticProps: GetStaticProps = Lib.getStaticProps;

export default SubPage;
