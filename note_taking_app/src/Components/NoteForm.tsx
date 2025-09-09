import React, { useRef, useState, type FormEvent } from "react";
import { Stack, Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import type { NoteData, Tag } from "../App";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      textBody: textAreaRef.current!.value,
      tags: selectedTags,
    });

    navigate("..");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="Body" />
            <Form.Label>Text Body</Form.Label>
            <Form.Control required as="textarea" rows={15} ref={textAreaRef} />
          </Col>
        </Row>
      </Stack>
      <Stack
        direction="horizontal"
        className="justify-content-end my-2"
        gap={2}
      >
        <Button type="submit" variant="primary">
          Save
        </Button>
        <Link to="..">
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Link>
      </Stack>
    </Form>
  );
};

export default NoteForm;
