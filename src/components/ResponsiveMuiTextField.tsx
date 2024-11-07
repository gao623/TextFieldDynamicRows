import React, { useMemo } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useWindowSize } from '../hooks/useWindowSize';

interface ResponsiveMuiTextFieldProps extends Omit<TextFieldProps, 'rows'> {
  baseRowHeight?: number;
  containerPadding?: number;
  minRows?: number;
  heightRatio?: number;
}

export function ResponsiveMuiTextField({
  baseRowHeight = 24, // Default height per row in pixels
  containerPadding = 16, // Reduced padding
  minRows = 2,
  heightRatio = 0.3, // Default height ratio of viewport
  ...props
}: ResponsiveMuiTextFieldProps) {
  const { height } = useWindowSize();

  const dynamicRows = useMemo(() => {
    // Calculate available height for TextField
    const availableHeight = height - (containerPadding * 2);
    
    // Calculate optimal number of rows based on available height and ratio
    const optimalHeight = Math.floor(availableHeight * heightRatio);
    const calculatedRows = Math.floor(optimalHeight / baseRowHeight);
    
    // Ensure we have at least minRows but not too many rows
    return Math.max(Math.min(calculatedRows, 20), minRows);
  }, [height, baseRowHeight, containerPadding, minRows, heightRatio]);

  return (
    <TextField
      {...props}
      multiline
      rows={dynamicRows}
      sx={{
        width: '100%',
        ...props.sx,
        '& .MuiInputBase-root': {
          transition: 'height 0.3s ease-in-out',
        },
        '& .MuiInputBase-input': {
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
            '&:hover': {
              background: '#666',
            },
          },
        },
      }}
    />
  );
}