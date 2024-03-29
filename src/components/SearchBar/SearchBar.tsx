import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

interface SearchBarProps {
    onSearch: (address: string) => void;
    isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
    const [address, setAddress] = useState('');

    const handleSearch = () => {
        onSearch(address);
    };

    return (
        <Flex width="80%" margin="0 auto" marginBottom="20px" marginTop="20px">
            <Input 
                placeholder="Enter address" 
                value={address}
                onChange={(e) => setAddress(e.target.value)} 
                marginRight="2"
            />
            <Button colorScheme="blue" onClick={handleSearch} isLoading={isLoading}>
                Search
            </Button>
        </Flex>
    );
};

export default SearchBar;
