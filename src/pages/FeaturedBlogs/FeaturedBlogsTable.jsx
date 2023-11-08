import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import PropTypes from 'prop-types';

const THEME = {
    Table: ``,
    Header: ``,
    Body: ``,
    BaseRow: `
      background-color: var(--theme-ui-colors-background);
  
      &.row-select-selected, &.row-select-single-selected {
        background-color: var(--theme-ui-colors-background-secondary);
        color: var(--theme-ui-colors-text);
      }
    `,
    HeaderRow: `
      font-size: 17px;
      color: var(--theme-ui-colors-text-light);
  
      .th {
        border-bottom: 1px solid var(--theme-ui-colors-border);
      }
    `,
    Row: `
      font-size: 17px;
      color: var(--theme-ui-colors-text);
  
      &:not(:last-of-type) .td {
        border-bottom: 1px solid var(--theme-ui-colors-border);
      }
  
      &:hover {
        color: var(--theme-ui-colors-text-light);
      }
    `,
    BaseCell: `
      border-bottom: 1px solid transparent;
      border-right: 1px solid transparent;
  
      padding: 8px;
      height: 52px;
  
      svg {
        fill: var(--theme-ui-colors-text);
      }
    `,
    HeaderCell: ``,
    Cell: ``,
};

const FeaturedBlogsTable = ({ blog }) => {
    const { title, category, shortDescription, timestamp } = blog || {};

    const data = { nodes };
    const theme = useTheme(THEME);

    const nodes = [
        {
            title: title,
            category: category,
            shortDescription: shortDescription,
            timestamp: timestamp,
        },
    ];

    const COLUMNS = [
        { label: 'Blog Title', renderCell: (item) => item.title },
        {
            label: 'Blog Category',
            renderCell: (item) => item.category
        },
        { label: 'Short Description', renderCell: (item) => item.shortDescription },
        { label: 'Posted Time', renderCell: (item) => item.timestamp },
    ];

    return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
};

export default FeaturedBlogsTable;

FeaturedBlogsTable.propTypes = {
    blog: PropTypes.object
}